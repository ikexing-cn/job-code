export const twoSum = (nums: Array<number>, target: number): Array<number> => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target)
        return [i, j]
    }
  }
  return []
}

export const twoSum2 = (nums: Array<number>, target: number): Array<number> => {
  const map = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i]
    if (map.has(diff))
      return [map.get(diff)!, i]
    else
      map.set(nums[i], i)
  }
  return []
}
