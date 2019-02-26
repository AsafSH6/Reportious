import jsonschema

REPORT_WORKING_DAYS_SCHEMA = {
    'type': 'array',
    'items': {
        'type': 'object',
        'properties': {
            'number': {
                '$ref': '#definitions/day_number'
            },
            'start_hour': {
                '$ref': '#definitions/start_hour'
            },
            'end_hour': {
                '$ref': '#definitions/end_hour'
            },
            'amount': {
                '$href': '#definitions/amount'
            }
        },
        'required': ['number', 'start_hour', 'end_hour', 'amount'],
        'additionalProperties': False
    },
    'definitions': {
        'day_number': {
            'type': 'number',
            'minimum': 0,
            'maximum': 31
        },
        'start_hour': {
            'type': 'string',
        },
        'end_hour': {
            'type': 'string',
        },
        'amount': {
            'type': 'number',
            'minimum': 0
        }
    }
}


def validate_report_working_days(days):
    return jsonschema.validate(instance=days,
                               schema=REPORT_WORKING_DAYS_SCHEMA)
