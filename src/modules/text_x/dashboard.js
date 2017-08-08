import template from './dashboard.html'
/**
 * Created by peak on 2017/2/10.
 */
export default {
    template,
    data() {
        return {
            textSpaceList: [
                '1px', '2px', '3px', '4px', '5px', '6px', '7px'
            ]
        }
    },
    methods: {
        setTextSpace(space) {
            this.$parent.execCommand('textSpace', space)
        },
    },
    created() {
        console.log(1111111)
    }
}