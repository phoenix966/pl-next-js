import BreadCrumbs from '../components/inner-components/BreadCrumbs'
import InnerInfo from '../containers/inner-containers/InnerInfo'
import InnerNews from '../containers/inner-containers/InnerNews'
import Layout from '../containers/Layout'

export default function Inner() {
  return (
    <div className="wrapper">
      <Layout>
        <InnerInfo/>
        <BreadCrumbs paddingTop="43" marginBottom="5" firstText="Новости" secondText="Внутренняя новость"/>
        <InnerNews/>
      </Layout>
    </div>
  )
}
