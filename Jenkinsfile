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
        stage("Deploy Clean") {
            steps {
                echo "Deploy Cleaning..."
                sh '''

                '''
            }
        }
        stage("Deploy Install") {
            environment {
                SERVICE_CREDS = credentials('7a7b2afd-24e3-4743-b007-b81697a1db5c')
            }
            steps {
                echo "Deploy Installing..."
                script {
                    def remote = [:]
                    remote.name = 'target'
                    remote.host = "${SSH_HOSTINGER_HOSTNAME}"
                    remote.user = "${SERVICE_CREDS_USR}"
                    remote.password = "${SERVICE_CREDS_PSW}"
                    remote.allowAnyHosts = true
                    sshPut remote: remote, from: './dist/ng-portfolio/browser/*', into: './' + remote.name
                }
            }
        }
    }
}