new Vue ({ // 최상위 루트
    el : '#app',
    data : {
        memo : "",
        memolist : [],
    },
    methods : {
        addMemo :function() {
            //memo의 값을 들고와서 memolist에 넣어준다.
            this.memolist.push(this.memo);
            this.memo = "";
        }
    }
})