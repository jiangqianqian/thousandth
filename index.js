function thousandth(s, n) {
  // 数字千分符格式化, s 表示传入的数据，n 为保留小数的位数
  if (n && n > 0 && n <= 20) {
    s = parseFloat((s + '').replace(/[^\d.-]/g, '')).toFixed(n) + ''
  } else {
    s = parseFloat((s + '').replace(/[^\d.-]/g, '')) + ''
  }

  const l = s.split('.')[0].split('').reverse()
  const r = s.split('.')[1]
  let t = ''

  for (let i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 === 0 && (i + 1) !== l.length ? ',' : '')
  }

  return t.split('').reverse().join('') + (r ? ('.' + r) : '')
}

// module.exports =  thousandth
export default thousandth
