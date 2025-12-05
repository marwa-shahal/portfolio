
import { EXPERIENCE_DATA } from '@/constants/common'
import PageTitle from '../components/PageTitle'
import ExperienceList from '../experience/components/ExperienceList'


export default async function ExperiencePage() {
    return (
        <>
            <PageTitle title="Experience" />
            <ExperienceList experience={EXPERIENCE_DATA} />
        </>
    )
}