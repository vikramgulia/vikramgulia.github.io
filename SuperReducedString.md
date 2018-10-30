# Super Reduced String
Given any string with lowercase characters [a...z], reduce the string to its shortest length by doing a series of operations. Each operation selects a pair of adjacent lowercase letters that match, and deletes them. For example:

`aab` -> `b`

`aaabccddd` -> `abd` (`aaabccddd → abccddd → abddd → abd`)

`aa` -> ``

`baab` -> ``

`zztqooauhujtmxnsbzpykwlvpfyqijvdhuhiroodmuxiobyvwwxupqwydkpeebxmfvxhgicuzdealkgxlfmjiucasokrdznmtlwh` -> `tqauhujtmxnsbzpykwlvpfyqijvdhuhirdmuxiobyvxupqwydkpbxmfvxhgicuzdealkgxlfmjiucasokrdznmtlwh`

### Solution
```python3
#! /usr/bin/env python
# super_reduced_string.py


def same_chars(str):
    if len(str) < 2:
        return False
    if str[0] == str[1]:
        return True
    return False


def super_reduced_string(str, isSanityCheck):
    """ aaabccddd → abccddd → abddd → abd """
    length = len(str)
    if isSanityCheck and (length % 2 == 1):
        return str
    if length == 0:
        return ""
    i = 0
    before_processing = str
    while i < len(str):
        sample = str[i:i+2]
        if same_chars(sample):
            str = str[0:i]+str[i+2:]
        else:
            i += 1
    if before_processing == str:
        return str
    return super_reduced_string(str, True)
    

def stack_version(s):
    stack = []
    for c in s:
        if len(stack) > 0:
            if stack[len(stack) - 1] == c:
                stack.pop()
            else:
                stack.append(c)
        else:
            stack.append(c)
    return ''.join(stack)


def main():
    s = input('Enter the string\n')
    # s = super_reduced_string(s, False)
    s = stack_version(s)
    print(s)


main()
```
