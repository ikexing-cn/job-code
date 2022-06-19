export const strrev = (str: string) => {
  return str.split('').reverse().join('')
}

export const strrev2 = (str: string) => {
  return [...str].reduceRight((acc, curr) => acc + curr)
}
