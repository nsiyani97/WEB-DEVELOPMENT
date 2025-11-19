function fibo(n) {
  let book = [];
  for (let i = 0; i <= n; i++) {
    if (i === 0) {
      book[i] = i;
    } else if (i === 1) {
      book[i] = i;
    } else {
      book[i] = book[i - 1] + book[i - 2];
    }
  }
  console.log(book);
}
fibo(n);

// -----------------------------------------

            let f=0
            let s=1
            let i=1
            while(i<=10){
                document.write('<br>'+f)
                t=f+s
                f=s
                s=t
                i++
            }