let formUser = {

    template: `
                <div>
                         <form method="POST" action="saveUser.php" class=" @submit=usersInfo' col-md-6 offset-col-md-6">
                                <div class="form-group ">
                                    <label for="lastName">Nom </label>
                                    <input type="text" class="form-control" id="lastName" name="lastName"  placeholder="Votre nom" required>
                                </div>
                
                                <div class="form-group ">
                                    <label for="firstName">Prénom </label>
                                    <input type="text" class="form-control" id="firstName" name="firstName" placeholder="Votre prénom" required>
                                </div>
                
                                <div class="form-group">
                                    <label for="dateBirth">Date de naissance </label>
                                    <input type="date" class="form-control" id="dateBirth" name="dateBirth" placeholder="Votre date de naissance" required>
                                </div>
                
                
                               <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" class="form-control" id="email" name="email" placeholder="Votre adresse email" required>
                                </div>
                                <div >
                                    <button type="submit" class="btn btn-primary">Valider</button>
                                </div>
                            </form> <br>
                    
                  </div>
  
    `,

    methods: {
        usersInfo : function () {
            this.$parent.$data.lastName = $res['nom'];
        }
    }

    }

 new Vue({

        el: '#app',

        data: {

            lastName : '',
            firstName : '',
            email : '',
            dateBirth: '',

            showForm : false,
            message :'Pour enregister une personne veuillez cliquez sur le bouton',
            persons: []
        },

        methods : {
            showFormUser : function() {
                this.showForm = true

            }

        },

        components: {
            formUser
        }

    })







