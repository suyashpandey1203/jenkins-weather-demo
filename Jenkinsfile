pipeline {
    agent any

    tools {
        nodejs "NodeJS"
    }

    stages {
        stage('Clone') {
            steps {
                git branch: 'main',url: 'https://github.com/suyashpandey1203/jenkins-weather-demo.git'
            }
        }

        stage('Install') {
            steps {
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Simulating deployment...'
                bat 'echo Weather report system is now live!'
            }
        }
    }
}