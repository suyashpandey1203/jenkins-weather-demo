pipeline {
    agent any

    tools {
        nodejs "NodeJS 18"
    }

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/YOUR_USERNAME/jenkins-weather-demo.git'
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Simulating deployment...'
                sh 'echo Weather report system is now live!'
            }
        }
    }
}