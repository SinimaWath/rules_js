console.log(process.argv)
console.log('--@aspect-test/a--', require('@aspect-test/a').id())
console.log('--@aspect-test/b--', require('@aspect-test/b').id())
console.log('--@aspect-test/c--', require('@aspect-test/c').id())
console.log('--@aspect-test/g--', require('@aspect-test/g').id())
console.log('--@lib/a--', require('@lib/a').id())
console.log('--@lib/a:e--', require('@lib/a').idE())
console.log('--@lib/a:@lib/b--', require('@lib/a').idLibB())
console.log(
    '--@lib/a:@lib/b--transitive--',
    require('@lib/a').idLibTransitiveF()
)
console.log('--@lib/a:vendored-a--', require('@lib/a').idVendoredA())
