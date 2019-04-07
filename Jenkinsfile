node {
   stage('Cloning from Git') {
      checkout([$class: 'GitSCM', branches: [[name: 'develop']], doGenerateSubmoduleConfigurations: false, extensions: [[$class: 'CleanCheckout'], [$class: 'CleanBeforeCheckout']], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/Fodorlevente/FamilyTodo.git']]])
    }
    dir('family-todo') {
        stage('Install dependencies'){
            bat 'npm install'
        }
        stage('test'){
            bat 'npm test'
        }
    }
}
