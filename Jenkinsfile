pipeline{
  agent any
  stages {
    stage('Deploy'){
              steps{
                 script{
                      docker.withRegistry('https://build.hdap.gatech.edu'){
  
                          //Build and push the web application image
                          def applicationImage = docker.build("sit-python-docker-web-app:1.0","-f ./Dockerfile .")
                           applicationImage.push('latest')
                        }
                    }
                }
    }
    stage('Notify'){
            steps{
                script{
                    rancher confirm: true, credentialId: 'rancher-server', endpoint: 'https://rancher.hdap.gatech.edu/v2-beta', environmentId: '1a7', environments: '', image: "build.hdap.gatech.edu/sit-python-docker-web-app:latest", ports: '', service: 'ShennongInfoTech/webapp', timeout: 60
                }
            }
    }

  }


}
