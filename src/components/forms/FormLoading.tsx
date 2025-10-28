import LoadingSpinner from '../animations/LoadingSpinner';

interface FormLoadingProps {
  message?: string;
}

const FormLoading = ({ 
  message = "Sending your message..." 
}: FormLoadingProps) => {
  return (
    <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-4 mb-6">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <LoadingSpinner size="sm" className="text-blue-400" />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-blue-300">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormLoading;
