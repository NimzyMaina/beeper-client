<template>
  <div>
        <h3 class="text-center">Register</h3>

        <div class="form-group" :class="{'has-error': errors.has('email') }" >
            <input v-model="user.email" name="email" v-validate="'required|email'" type="email" class="form-control flat m-b-15" placeholder="Email">
            <p class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</p>
        </div>

        <div class="form-group" :class="{'has-error': errors.has('username') }" >
            <input v-model="user.username"  type="text" v-validate="'required|alpha'" name="username" class="form-control flat m-b-15" placeholder="Username">
            <p class="text-danger" v-if="errors.has('username')">{{ errors.first('username') }}</p>
        </div>

        <div class="form-group" :class="{'has-error': errors.has('password') }" >
            <input v-model="user.password"  type="password" v-validate="'required|min:4'"  name="password" class="form-control flat" placeholder="Password">
             <p class="text-danger" v-if="errors.has('password')">{{ errors.first('password') }}</p>
        </div>

        <hr/>

        <button @click="validate" :disabled="errors.any()" class="btn btn-lg btn-primary btn-block flat m-b-15">Register</button>


        <p class="text-center">
            Already have an account? <router-link to="/auth/login">Login!</router-link>
        </p>
    </div>
</template>

<script>
export default {
    name: 'register',
    data(){
        return{
            user: {
                email: '',
                username: '',
                password: ''
            }
        }
    },
    methods: {
        register: function(){
            var vm = this;
            axios.post('/users',this.user)
            .then((res) => {
                console.log('success',res);
                alertify.success("Success! You can now login with your email and password.");
                this.$router.push('/auth/login');
            }).catch((error) => {
                 // Error
                 if(error.response.status === 422){
                     error.response.data.errors.forEach(function(e){
                         alertify.error(e);
                     })
                 }
                 console.log('error',error.response);
            })
        },
        validate(e) {
            this.$validator.validateAll().then(res=>{
                if(res) {
                    this.register()
                }
            })
         },
         register2: function() {
             this.$http.post('http://localhost:9090/users',this.user)
             .then(function(res){
                alertify.success("Success! You can now login with your email and password.");
                this.$router.push('/auth/login');
             })
             .catch(function(res){
                 if(res.status == 422) {
                     res.body.errors.forEach(function(e){
                         alertify.error(e);
                     })
                 }
             })
         }
    }
}
</script>

<style>

</style>
