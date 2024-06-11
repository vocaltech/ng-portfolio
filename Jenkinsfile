pipeline {
    agent {
        docker {
            image 'node:lts-bullseye-slim'
        }
    }
    stages {
        stage("Build") {
            steps {
                echo "Building.."
                sh '''
                    npm install
                    npm run build
                '''
            }
        }
    }
}