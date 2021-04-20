import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators, AnyAction } from 'redux';

export function useAction(action) {
    const dispatch = useDispatch();
    return useMemo(() => bindActionCreators(action, dispatch), [
        action,
        dispatch,
    ]);
}
