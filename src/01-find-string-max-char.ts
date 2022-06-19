function findStringMaxChar(str: string) {
  const charMap: Record<string, number> = {}

  for (const char of str)
    charMap[char] = charMap[char] + 1 || 1

  return Object.keys(charMap).reduce((a, b) => (charMap[a] > charMap[b] ? a : b))
}

export default findStringMaxChar
