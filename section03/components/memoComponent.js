Vue.component('link-component', {
    props: ["url"],
    template :
    `<div>
        <p>슬롯사용</p>
        <a v-bind:href="url">
            <slot></slot>
        </a>
    </div>`
})