import Layout from 'layouts/Auth'
import Sidebar from 'components/Sidebar'
import Header from 'components/Header'
import Title from 'components/Title'
import Card from 'components/Card'
import CardOptions from 'components/CardOptions'

import UserIcon from 'assets/userCreate.svg'
import DbCreate from 'assets/dbCreate.svg'
import CardPlan from 'components/CardPlan'

export default function DashboardPage() {
  return (
    <Layout title="Meus bancos de dados">
      <Sidebar />

      <div className="container-pp2">
        <Header />
        <Title
          title="Meus bancos de dados"
          subtitle="Seus bancos de dados são monitorados aqui"
        />

        <div className="row mt-4">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <Card />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm col-sm-12 col-md-12 col-lg-8">
            <CardOptions
              title="Criar usuário"
              subtitle="Cire um usuário pro seu db"
              image={UserIcon}
              active={true}
            />
            <CardOptions
              title="Criar um banco de dados"
              subtitle="Crie já o seu banco de dados"
              image={DbCreate}
            />
          </div>
          <div className="col-sm col-sm-12 col-md-12 col-lg-4">
            <CardPlan />
          </div>
        </div>
      </div>
    </Layout>
  )
}
