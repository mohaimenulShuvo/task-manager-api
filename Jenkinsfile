pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }
        stage('Build Docker Image') {
            steps {
                bat 'docker build -t task-manager-api .'
            }
        }
        stage('Run with Docker Compose') {
            steps {
                bat 'docker-compose up -d'
            }
        }
    }
}
