import BreadCrumbs from '../components/inner-components/BreadCrumbs';
import TeacherCollage from '../components/teachers-container/TeacherCollage';
import Layout from '../containers/Layout';
import TeacherInfo from '../containers/teachers-containers/TeacherInfo';
import TeachersContainer from '../containers/teachers-containers/TeachersContainer';

export default function teachers() {
  return (
    <div className="wrapper">
      <Layout>
        <div className='teacher-nav'>
          <BreadCrumbs paddingTop="53" marginBottom="35" firstText="О нас" secondText="Наши Преподаватели"/>
        </div>
        <TeachersContainer/>
        <TeacherInfo/>
        <TeacherCollage/>
      </Layout>
    </div>
  )
}
