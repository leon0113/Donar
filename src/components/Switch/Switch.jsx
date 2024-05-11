import { useState } from 'react';

const ToggleSwitch = () => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleSwitch = () => {
        setIsChecked(prevState => !prevState);
    };

    return (
        <div className="flex items-center justify-center">
            <label htmlFor="toggle" className="flex items-center cursor-pointer">
                <div className="relative">
                    <input
                        id="toggle"
                        type="checkbox"
                        className="hidden"
                        checked={isChecked}
                        onChange={toggleSwitch}
                    />
                    <div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                    <div className={`toggle__dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 ${isChecked ? 'bg-green-400' : 'bg-gray-400'}`}></div>
                </div>
                <div className="ml-3 text-gray-700 font-medium">Toggle</div>
            </label>
        </div>
    );
};

export default ToggleSwitch;
