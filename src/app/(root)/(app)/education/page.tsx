import PageTitle from '../components/PageTitle'
import EducationList from './components/EducationList';
import { EDUCATION_DATA } from '@/constants/common';


export default async function EducationPage() {
    return (
        <>
            <PageTitle title="Education" />
            <EducationList data={EDUCATION_DATA} />
        </>
    )
}