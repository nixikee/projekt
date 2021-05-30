import { FormArray, FormGroup, FormControl } from '@angular/forms';

export function getAgreementSpecificationForm(): FormGroup {
    return new FormGroup({
        attachment: new FormArray([
            new FormGroup({
                description: new FormControl(),
                href: new FormControl(),
                id: new FormControl(),
                url: new FormControl(),
                name: new FormControl(),
                attachmentType: new FormControl(),
                content: new FormControl(),
                mimeType: new FormControl(),
                size: new FormControl(),
                validFor: new FormControl()
            })
        ]),
        description: new FormControl(),
        href: new FormControl(),
        isBundle: new FormControl(),
        lastUpdate: new FormControl(),
        lifecycleStatus: new FormControl(),
        name: new FormControl(),
        relatedParty: new FormArray([
            new FormGroup({
                href: new FormControl(),
                id: new FormControl(),
                name: new FormControl(),
                role: new FormControl()
            })
        ]),
        serviceCategory: new FormGroup({
            href: new FormControl(),
            id: new FormControl(),
            name: new FormControl(),
            version: new FormControl()
        }),
        specificationCharacteristic: new FormArray([
            new FormGroup({
                configurable: new FormControl(),
                description: new FormControl(),
                specCharacteristicValue:  new FormGroup({
                    default: new FormControl(),
                    unitOfMeasure: new FormControl(),
                    validFor: new FormControl(),
                    value: new FormControl(),
                    valueFrom: new FormControl(),
                    valueTo: new FormControl(),
                    valueType: new FormControl()
                }),
                validFor: new FormControl(),
                valueType: new FormControl()
            })
        ]),
        specificationRelationship: new FormArray([
            new FormGroup({
                href: new FormControl(),
                id: new FormControl(),
                name: new FormControl(),
                relationshipType: new FormControl(),
                validFor: new FormControl()
            })
        ]),
        validFor: new FormControl(),
        version: new FormControl()
    });
}
