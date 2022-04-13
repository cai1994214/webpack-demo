import _ from 'lodash';
import $ from 'jquery';
import { red } from './demo'

const dom = $('<div>');
dom.html(_.join(['hello', 'webpack'], '-'));
$('body').append(dom)
red();