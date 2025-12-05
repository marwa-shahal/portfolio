import { IExperienceItem } from '@/types/experience'

interface ExperienceListProps {
    experience: IExperienceItem[]
}

const ExperienceList: React.FC<ExperienceListProps> = ({ experience }) => {
    return (
        <div className="space-y-12">
            {experience.map((item) => (
                <div key={item.id} className="relative py-8 pl-8 sm:pl-16 border border-black/5 bg-white/30 backdrop-blur dark:border-white/5 dark:bg-black/30">
                       
                            {/* Timeline Connector/Dot (Optional Styling) */}
                            {/* <div className="absolute top-0 left-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700 group-last:h-5 transition-all duration-300">
                                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[5.5px] top-0 shadow-lg"></div>
                            </div> */}

                            <div className="flex flex-col sm:flex-row justify-between items-start mb-2 sm:w-[90%]">
                                <div className="flex-grow">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug">
                                        {item.title} at {item.company}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {item.location}
                                    </p>
                                </div>
                                <div className="sm:w-40 flex-shrink-0 mb-1 sm:mb-0">
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                        {item.period}
                                    </p>
                                </div>
                            </div>
                            <ul className="list-disc ml-4 sm:ml-0 sm:w-[90%] text-gray-700 dark:text-gray-300 space-y-1">
                                {item.description.map((desc, index) => (
                                    <li key={index} className="text-base leading-relaxed">
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
        
            ))}
        </div>
    )
}

export default ExperienceList