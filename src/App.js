import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Container, Row, Navbar, NavDropdown, FormControl, Form, Nav, Badge, Tabs, Tab, Table } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import $ from "jquery";
import JSONTree from 'react-json-tree'
// If you're using Immutable.js: `npm i --save immutable`
import { Map } from 'immutable'

class App extends Component {


  render() {

    const theme = {
      scheme: 'monokai',
      author: 'Cleidimar Viana',
      base00: '#272822', /* background */
      base01: '#383830',
      base02: '#49483e',
      base03: '#75715e',
      base04: '#a59f85',
      base05: '#f8f8f2',
      base06: '#f5f4f1',
      base07: '#f9f8f5',
      base08: '#f92672',
      base09: '#fd971f',
      base0A: '#f4bf75',
      base0B: '#a6e22e',
      base0C: '#a1efe4',
      base0D: '#66d9ef',
      base0E: '#ae81ff',
      base0F: '#cc6633'
    };

    var data = {
      "nome" : "Ednilsonx",
      "mensagem" : "Alo brasil",
      "telefone" : "5511948700140",
      "voucher": "20181DVFCRGM00009801"
    };
    var headers = [
      {
        "type": "Content-Type",
        "value": "application/json"
      }, {
        "type": "Accept",
        "value": "application/json"
      }
    ];

    const listItems = headers.map((item) =>
      <li>{item.type + " : " + item.value}</li>
    );

   
    return (
      <div className="App">
        <div class="d-flex" id="wrapper">

          <div class="bg-light border-right" id="sidebar-wrapper">
            <div class="sidebar-heading">DKApi</div>
            <div class="list-group list-group-flush">
              <a href="#" class="list-group-item list-group-item-action bg-light">Dashboard</a>
              <a href="#" class="list-group-item list-group-item-action bg-light">Shortcuts</a>
              <a href="#" class="list-group-item list-group-item-action bg-light">Overview</a>
              <a href="#" class="list-group-item list-group-item-action bg-light">Events</a>
              <a href="#" class="list-group-item list-group-item-action bg-light">Profile</a>
              <a href="#" class="list-group-item list-group-item-action bg-light">Status</a>
            </div>
          </div>
          <div id="page-content-wrapper">
            <div class="container-fluid">
              <h4>SMS</h4>
              <h6>Envio de SMS usando Api do Zenvia</h6>
              <h5>Parâmetros</h5>
              <Table striped bordered size="sm">
                <thead>
                  <tr>
                    <th>Campo</th>
                    <th>Tipo</th>
                  </tr>
                </thead>
                <tbody>
                 
                </tbody>
              </Table>
              <h5><Badge variant="primary">POST</Badge> <span className="url-api"> https://apidev.dkapi.com</span>/sms</h5>

              <h6>HEADERS</h6>
              <div className="doc-headers">{listItems}</div>
              <br/>
              <h6>BODY</h6>
              <pre className="doc-request">
                {JSON.stringify(data, null, 2)}
              </pre>

              {/* <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">

                <Tab eventKey="profile" title="Profile">

                  <JSONTree data={data} theme={{
                    extend: theme,
                    // underline keys for literal values
                    valueLabel: {
                      textDecoration: 'underline'
                    },
                    // switch key for objects to uppercase when object is expanded.
                    // `nestedNodeLabel` receives additional arguments `expanded` and `keyPath`
                    nestedNodeLabel: ({ style }, nodeType, expanded) => ({
                      style: {
                        ...style
                      }
                    })
                  }} />
                </Tab>

              </Tabs> */}

            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
