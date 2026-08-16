// scratch/shared shim
import filesaver from 'file-saver';

export const saveAs = ({ data, filename, type }) => {
    const blob = new Blob([data], { type });
    filesaver.saveAs(blob, filename);
};

export const getContractTypeOptions = (contract_type, trade_type) => {
    if (trade_type && trade_type !== 'na' && trade_type !== '') {
        const trade_types = {
            CALL: [['Rise', 'CALL']],
            PUT: [['Fall', 'PUT']],
            BOTH: [['Rise', 'CALL'], ['Fall', 'PUT']],
            DIGIT: [['Matches', 'DIGITMATCH'], ['Differs', 'DIGITDIFF'], ['Even', 'DIGITEVEN'], ['Odd', 'DIGITODD'], ['Over', 'DIGITOVER'], ['Under', 'DIGITUNDER']],
            TICK: [['Matches', 'DIGITMATCH'], ['Differs', 'DIGITDIFF']],
            ASIAN: [['Asian Up', 'ASIANU'], ['Asian Down', 'ASIAND']],
            RANGE: [['Stays Between', 'RANGEBETWEEN'], ['Goes Outside', 'RANGEOUTSIDE']],
            UPDOWN: [['Goes Up', 'UPDOWNU'], ['Goes Down', 'UPDOWN']],
        };
        const contract_options = (trade_types[trade_type] || []).map(o => [...o].reverse());
        if (contract_type && contract_type !== 'both') {
            return contract_options.filter(o => o[1] === contract_type);
        }
        return contract_options;
    }
    return [];
};
