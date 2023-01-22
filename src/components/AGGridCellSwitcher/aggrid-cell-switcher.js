import Vue from 'vue';
export default Vue.extend({
    template: `
        <label class="switch">
            <input type="checkbox" @change="chkChangedHandler($event)" v-bind="[params.data.status === true && {'checked':true}]">
            <span class="slider round"></span>
        </label>
    `,
    methods: {
        chkChangedHandler(event) {
            this.params.changed(event.target.checked);
        }
    }
});