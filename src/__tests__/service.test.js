import service from '../service';

let oldXMLHttpRequest;

function createMockXhr(responseText, readyState, status) {
  const mockXHR = {
    open: jest.fn(),
    send: jest.fn(),
    overrideMimeType: jest.fn(),
    readyState,
    status,
    responseText
  };

  window.XMLHttpRequest = jest.fn(() => mockXHR);

  return mockXHR;
}

function xmlHttpRequestBackup() {
  oldXMLHttpRequest = window.XMLHttpRequest;
}

function xmlHttpRequestRestore() {
  window.XMLHttpRequest = oldXMLHttpRequest;
}

function whenReadFile(fileUrl, xhr) {
  const promise = service(fileUrl);
  xhr.onreadystatechange();

  return promise;
}

describe('making a request', () => {
  const fileUrl = 'any url';
  const readyState = 4;
  const state = 200;

  beforeEach(() => {
    xmlHttpRequestBackup();
  });

  afterEach(() => {
    xmlHttpRequestRestore();
  });

  it('should return an object with a valid state and the content of a valid json file', done => {
    const fileContent = { key: 'any content' };
    const xhr = createMockXhr(fileContent, readyState, state);
    const promise = whenReadFile(fileUrl, xhr);

    promise.then(response => {
      expect(response).toEqual(fileContent);
      done();
    });
  });

  it('should return an error if the file is invalid', done => {
    const xhrError = { error: 'any error' };
    const xhr = createMockXhr(xhrError, readyState, state);
    const promise = whenReadFile(fileUrl, xhr);

    promise.catch(response => {
      expect(response).toEqual(xhrError);
      done();
    });
  });
});
