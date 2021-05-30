export interface Event {
    correlationId?: String,
    description?: String,
    domain?: String,
    eventId: String,
    eventTime: Date, //DateTime
    eventType: String,
    fieldPath?: String,
    href?: String,
    id?: String,
    priority?: String,
    timeOccurred?: Date //DateTime
    title?: String
}