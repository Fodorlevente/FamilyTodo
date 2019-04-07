node {
    dir('repo_folder') {    
       stage('Cloning from Git') {
          checkout([$class: 'GitSCM', branches: [[name: 'develop']], doGenerateSubmoduleConfigurations: false, extensions: [[$class: 'CleanCheckout'], [$class: 'WipeWorkspace']], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/Fodorlevente/FamilyTodo.git']]])
        }
        // stage('Change directory'){
        //      bat 'cd family-todo'
        // }
        stage('Install dependencies'){
            dir('family-todo') {
                bat 'npm install'
            }
        }
    }
}
