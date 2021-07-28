let audio = new Audio('sound/Nice To Meet Ya - Wes Nelson.mp3')
const App = {
    data() {
        return {
            state: ' OFF',
            playing: false
            
        }
    },
    
    methods: {
        
        changeState(e) {
            e.preventDefault()
           
            if (this.playing == true) {
                this.playing = false
                this.state = ' OFF'
                audio.pause();
                
            }else if(this.playing == false){
                this.state = ' ON'
                this.playing = true
                 audio.play();
                 audio.volume = 0.3;
            }
           
           
        },

       

        
        
    },

    computed: {
        
    }
    
    
}


Vue.createApp(App).mount('#sound')