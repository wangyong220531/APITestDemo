export interface Page {
    page?: number
    pageSize?: number
    total?: number
    totalPage?: number
}
export interface TimePeriod {
    endTime?: number
    startTime?: number
    type?: number
}
export interface Association {
    associatedCaptures?: Capture[]
    associatedStatus?: 0 | 1
    captureType?: string
    objId?: string
}
export interface ImageResult {
    height?: number
    width?: number
    imageSerial?: string
    name?: string
    url?: string
}
export interface CameraBlock {
    blockId?: number
    blockName?: string
    blockType?: number
    blockTypeName?: string
    latitude?: string
    longitude?: string
    resourceCount?: number
    typeId?: number
}
export interface Camera {
    accessStatus?: 0 | 1 | 2 | 3
    blocks?: CameraBlock[]
    bodyAccessStatus?: 0 | 1 | 2 | 3
    businessCount?: number
    deviceCode?: string
    extraInfo?: string
    latitude?: string
    longitude?: string
    name?: string
    resourceId?: number
    resourceTypeId?: string
    serial?: string
    status?: number
}
export interface Vertex {
    x?: number
    y?: number
}
export interface BoundingPoly {
    end?: Vertex
    height?: number
    start?: Vertex
    width?: number
}
export interface ObjectInfo {
    duration?: number
    eventLevel?: number
    eventType?: number
    image?: ImageResult
    position?: BoundingPoly
    quality?: number
}
export interface Capture {
    alarmId?: string
    associations?: Association[]
    batchSelected?: boolean
    bigImage?: ImageResult
    camera?: Camera
    captureTime?: number
    captureType?: string
    cyclist?: ObjectInfo
    event?: ObjectInfo
    extraInfo?: string
    face?: ObjectInfo
    garbage?: ObjectInfo
    humanPoweredVehicle?: ObjectInfo
    integrateCapture?: Capture
    integrateStatus?: 0 | 1 | 2
    isClue?: boolean
    latitude?: number
    locationName?: string
    longitude?: number
    objId?: string
    objectId?: string
    objectSerial?: string
    pedestrian?: ObjectInfo
    quality?: number
    relativeTime?: number
    score?: number
    selected?: boolean
    serial?: string
    uniqueId?: string
    vehicle?: ObjectInfo
    watercraft?: ObjectInfo
}
export interface CameraSerialGroup {
    cameraSerials?: string[]
    groupSerial: string
    selectType: number
    sourceType: number
}
export interface AttributeFilterCondition {
    field?: string
    path?: string
    type: string
    value?: any
    valueType: string
}
export interface AttributeFilter {
    conditions?: AttributeFilterCondition[]
    operator?: string
}
export interface TimeSpaceFilter {
    attributeFilters?: AttributeFilter[]
    cameraSerials?: string[]
}
export interface LabelCheckedExpr {
    categoryChecked?: string[]
    checkedSize?: number
    excludeChecked?: string[]
    includeChecked?: string[]
}
export interface StatusParam {
    accessedObjectTypes?: string[]
    unAccessedObjectTypes?: string[]
}
export interface CameraSerialGroupsType {
    cameraSerials?: string[]
    groupSerial?: string
    selectCount?: number
    selectType?: number
}
export interface CasCadeCameraRequestParam {
    accessedOnly?: boolean
    admin?: boolean
    availableOnly?: boolean
    blockIds?: string[]
    crowdTaskStatuses?: number[]
    expr?: LabelCheckedExpr
    onceConnected?: boolean
    permissionFilter?: boolean
    resourceTypeIds?: number[]
    serviceTypes?: number[]
    typeId?: number
    userId?: number
}
export interface MapQuadrilateralParam {
    maxCoordinate?: { latitude?: number; longitude?: number }
    minCoordinate?: { latitude?: number; longitude?: number }
}
export interface CoordinatesParam {
    blockIds?: string[]
    clusterSerial: string
    quadrilateralParams: MapQuadrilateralParam[]
    resouceSerials?: string[]
}
export interface CameraTreeRequestParam {
    cameraSerialGroups?: CameraSerialGroupsType[]
    casCadeCameraRequestParam: CasCadeCameraRequestParam
    coordinatesParam?: CoordinatesParam
}
export interface TaskVo {
    creatorName?: string
    organName?: string
    taskName?: string
    taskSerial?: string
    taskId?: number
}
export interface VideoResourceListVo {
    accessStatus?: 0 | 1
    bodyAccessStatus?: 0 | 1
    businessThemeEnumList?: string[]
    cityAccessStatus?: 0 | 1
    crowdAccessStatus?: 0 | 1
    deviceCode?: string
    faceFeatureStatus?: number
    facePedestrianAccessStatus?: 0 | 1
    groupName?: string
    groupSerial?: string
    labels?: string[]
    latitude?: string
    longitude?: string
    multiFacePachStatus?: 0 | 1
    name?: string
    objectTypeEnums?: string[]
    profileStatus?: number
    runStatus?: 0 | 1 | 2
    serial?: string
    status?: 0 | 1
    type?: 0 | 1 | 2 | 3 | 4
    tasks?: TaskVo[]
}
export interface PageResponseDataOfVideoResourceListVo {
    currentTimeStamp?: number
    page?: number
    total?: number
    totalPage?: number
    dataList?: VideoResourceListVo[]
}
export interface ResourceResultInfo {
    algoStructReidcount?: number
    automobileDetectCount?: number
    bodyOnlineCount?: number
    breakCount?: number
    cityOnlineCount?: number
    crowdOnlineCount?: number
    faceOnlineCount?: number
    facePedestrianNonAutoCount?: number
    importFaceFeatrueCount?: number
    facePedestrianCount?: number
    importProfileCount?: number
    multiFacePachCount?: number
    multiPachIpscount?: number
    offlineCount?: number
    onlineCount?: number
    responseData?: PageResponseDataOfVideoResourceListVo
    totalCount?: number
    unknowCount?: number
}
export interface VideoResourceTreeNode {
    blockId?: string
    blockName?: number
    businessCount?: number
    currentLevel?: number
    deleted?: boolean
    groupId?: number
    groupSerial?: string
    groupType?: 0 | 1
    leafNode?: boolean
    name?: string
    nodeType?: 0 | 1
    parentGroupSerial?: string
    parentId?: number
    path?: string
    region?: string
    resourceSerial?: string
    resources?: VideoResourceNode[]
    resourcesCount?: number
    selected?: boolean
    status?: 0 | 1
    subBlock?: boolean
    userIds?: number[]
    subTreeNodes?: VideoResourceTreeNode[]
}
export interface VideoResourceNode {
    accessStatus?: 0 | 1
    blockId?: string
    blockName?: string
    blockTypeId?: string
    bodyAccessStatus?: 0 | 1
    businessCount?: number
    cityAccessStatus?: 0 | 1
    crowdAccessStatus?: 0 | 1
    deviceCode?: string
    facePedestrianAccessStatus?: 0 | 1
    groupName?: string
    groupSerial?: string
    latitude?: string
    longitude?: string
    multiFacePachStatus?: 0 | 1
    name?: string
    nebulaPlatform?: string
    nebulaPlatformId?: number
    nodeType?: 0 | 1
    path?: string
    resourceSerial?: string
    runStatus?: 0 | 1
    scenarioType?: number
    status?: 0 | 1
    topGroupName?: string
    type?: number
}
export interface PageResponseDataOfVideoResourceNode {
    currentTimeStamp?: number
    page?: number
    total?: number
    totalPage?: number
    dataList?: VideoResourceNode[]
}
export interface ResourceGroupResultInfo {
    responseData?: VideoResourceTreeNode[]
    totalCount?: number
    videoResourceNodes?: PageResponseDataOfVideoResourceNode
}
export interface TimeSpaceQueryResp {
    captures?: Capture[]
    page?: Page
}
