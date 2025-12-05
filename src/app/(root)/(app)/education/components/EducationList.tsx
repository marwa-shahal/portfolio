import { IEducationItem } from "@/types/experience";

; // Adjust path as needed

interface EducationListProps {
  data: IEducationItem[];
}

const EducationList: React.FC<EducationListProps> = ({ data }) => {
  // 1. Filter the data into two main groups
  const academic = data.filter(item => item.type === 'academic');
  const professional = data.filter(item => item.type === 'certification' || item.type === 'diploma');

  // 2. Helper function for rendering a single card item
  const renderItem = (item: IEducationItem) => (
    <div key={item.title} className="p-4 bg-white/30 border border-black/5 backdrop-blur dark:border-white/5 dark:bg-black/30">
      <div className="flex justify-between items-start mb-1">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
          {item.title}
        </h3>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 flex-shrink-0 ml-4">
          {item.period}
        </p>
      </div>
      <p className={`text-sm italic font-medium mb-2 ${item.type === 'academic' ? 'text-indigo-600 dark:text-indigo-400' : 'text-teal-600 dark:text-teal-400'}`}>
        {item.institution} {item.location && ` | ${item.location}`}
      </p>
      
      {/* Details as simple, clean list (not bullet points) */}
      <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
        {item.details.map((detail, index) => (
          <p key={index} className="pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-sm before:text-gray-500">
            {detail}
          </p>
        ))}
      </div>
    </div>
  );

  // 3. Render the main structure using a grid
  return (
    <div className="space-y-12">
      
      {/* Section 1: Academic Education (Full width if only one or two items) */}
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Academic Education
      </h2>
      <div className="space-y-6">
        {academic.map(renderItem)}
      </div>

      <hr className="border-gray-200 dark:border-gray-700" />
      
      {/* Section 2: Professional Certifications (Grid for density) */}
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Professional Certifications & Training
      </h2>
      {/* Uses a two-column layout on desktop for a dense, professional look */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {professional.map(renderItem)}
      </div>
    </div>
  );
};

export default EducationList;