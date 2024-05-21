/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { lanAtom } from '../../atom';

const ToggleSwitch = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [lan, setLan] = useRecoilState(lanAtom);

    const toggleSwitch = () => {
        setIsChecked(prevState => !prevState);
        setLan(prevLan => prevLan === 'en' ? 'fn' : 'en');
    };
    return (
        <div className="p-2">
            <label htmlFor="check" className="flex bg-gray-900 cursor-pointer relative w-20 h-10 rounded-full">
                <input onClick={toggleSwitch} type="checkbox" id="check" className="sr-only peer" />
                <span className="w-2/5 h-4/5 bg-yellow-500 absolute rounded-full left-1 top-1 peer-checked:left-11 transition-all duration-500 text-center flex items-center justify-center font-semibold" >

                    {
                        isChecked ? "FN" : "EN"
                    }

                </span>
            </label>
        </div>
    );
};

export default ToggleSwitch;
