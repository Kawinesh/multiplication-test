import reducer, { buttonClicked, getInitialState } from './numberSlice'

test('when 3 is clicked should set ishighlighted=true on 1,3 and isSelected=true on 3', () => {

    const state = getInitialState();
    const newState = getInitialState();
    newState.buttons["1"] = { label: 1, ishighlighted: true, isSelected: false }
    newState.buttons["3"] = { label: 3, ishighlighted: true, isSelected: true }

    expect(reducer(state, buttonClicked(3))).toMatchObject(newState)
})

test('when 6 is clicked should set ishighlighted=true on 1,2,3 and isSelected=true on 6', () => {

    const state = getInitialState();
    const newState = getInitialState();
    newState.buttons["1"] = { label: 1, ishighlighted: true, isSelected: false }
    newState.buttons["2"] = { label: 2, ishighlighted: true, isSelected: false }
    newState.buttons["3"] = { label: 3, ishighlighted: true, isSelected: false }
    newState.buttons["6"] = { label: 6, ishighlighted: true, isSelected: true }

    expect(reducer(state, buttonClicked(6))).toMatchObject(newState)
})

test('when 3 is clicked twice should all highlights should be removed', () => {

    const state = getInitialState();
    const changedState1 = reducer(state, buttonClicked(3));
    const changedState2 = reducer(changedState1, buttonClicked(3));
    const newState = getInitialState();

    expect(changedState2).toMatchObject(newState)
})