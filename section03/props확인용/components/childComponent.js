Vue.component('child-component', {
    // props은 컴포넌트의 속성을 만든다
    // 개발자가 외부에서 가져온 값을 저장하기 위한 공간
    props : ['parentmessage', 'tagmessage'],
    template : 
    `<div>
        <p>
            부모로 부터 들고온 메세지 : 
            {{parentmessage}}
        </p>
        <p>
            태그로 부터 들고온 메세지 : 
            {{tagmessage}}
        </p>
    </div>`
})