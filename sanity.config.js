import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  projectId:"ofvjsikj",
  dataset:"production",
  useCdn:true,
  apiVersion:"2021-10-21",
  basePath:"/admin",
  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
