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
            this.state = ' ON'
            let audio = new Audio('sound/Nice To Meet Ya - Wes Nelson.mp3')
            if (this.playing) {
                audio.pause();
              
                
            }else{
                audio.play();
                this.playing = true
            }
           
           
        },

       

        
        
    },

    computed: {
        
    }
    
    
}


Vue.createApp(App).mount('#sound')