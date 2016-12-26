import reduxInconsistentApi from '../../src/redux-inconsistent-api';

describe('reduxInconsistentApi', function() {
  it('should be a function', () => {
    expect(reduxInconsistentApi).to.be.a('function');
  });

  it('should return an object with the proper shape', () => {
    const result = reduxInconsistentApi('hello');
    expect(result).to.be.an('object');
    expect(result).to.contain.all.keys('initialState', 'reducer',
      'actionCreators', 'actionTypes');
  });

  it('should have the correct initialState', () => {
    const result = reduxInconsistentApi('hello');
    expect(result.initialState).to.deep.equal({
      resources: [],
      resourcesMeta: {}
    });
  });

  describe('passing in initialState', () => {
    it('should set the correct initialState', () => {
      const result = reduxInconsistentApi('hello', {
        initialState: {
          hello: 'oink',
          pizza: true
        }
      });

      expect(result.initialState).to.deep.equal({
        hello: 'oink',
        pizza: true
      });
    });
  });
});
