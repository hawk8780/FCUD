Vue.component("formulario", {

    data() {
        return {
            formulario: 0
        }
    },

    template: //html
    `
    <div>
        <div class="col-xs-12 col-sm-7 col-md-7">
            <div id="formu" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
        </div>
    </div>
    `
});