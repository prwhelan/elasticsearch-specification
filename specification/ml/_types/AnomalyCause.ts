/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { Field, Name } from '@_types/common'
import { double } from '@_types/Numeric'
import { Influence } from './Influence'

export class AnomalyCause {
  actual: double[]
  by_field_name: Name
  by_field_value: string
  correlated_by_field_value: string
  field_name: Field
  function: string
  function_description: string
  influencers: Influence[]
  over_field_name: Name
  over_field_value: string
  partition_field_name: string
  partition_field_value: string
  probability: double
  typical: double[]
}