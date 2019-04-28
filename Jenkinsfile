node {
   stage('Cloning from Git') {
      checkout([$class: 'GitSCM', branches: [[name: 'develop']], doGenerateSubmoduleConfigurations: false, extensions: [[$class: 'CleanCheckout'], [$class: 'CleanBeforeCheckout']], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/Fodorlevente/FamilyTodo.git']]])
    }
    dir('family-todo') {
        stage('Install dependencies'){
            bat 'npm install'
            bat 'npm install -g jsdoc'
            bat 'jsdoc src/server/server.js'
            bat 'jsdoc src/components/todoInput.js'
            bat 'src/components/todoItem.js'
        }
        stage('Test functionality with mocha'){
            bat 'mocha src/test/backend.js'
        }
    }
}
