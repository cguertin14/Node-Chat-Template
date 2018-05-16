import moment from 'moment';

// Export generateMessage function.
export const generateMessage = (from, text) => {
    return {
        from, 
        text,
        createdAt: moment().valueOf()
    };
};