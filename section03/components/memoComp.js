Vue.component('memo-comp', {
    props : ['id'],
    template : 
    `<div>        
        <h3>            
            <slot name="title"></slot>
            <button @click="deletememo">X</button>
        </h3>
        <hr>
        <slot name="memo"></slot>
        <p>{{time}}</p>
    </div>`,
        
    
    data : function(){
        return {
            time : new Date(),
        }
    },
    methods : {
        deletememo : function(){
            this.$emit('delete', this.id);
        }
    }
})