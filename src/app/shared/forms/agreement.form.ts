import { FormArray, FormGroup, FormControl } from '@angular/forms';

export function getAgreementForm(): FormGroup {
    return new FormGroup({
        agreementAuthorization: new FormArray([
            new FormGroup({
                date: new FormControl(),
                signatureReprezentation: new FormControl(),
                state: new FormControl()
            })
        ]),
        agreementItem: new FormArray([
            new FormGroup({
                product: new FormGroup({
                    href: new FormControl(),
                    id: new FormControl(),
                    name: new FormControl()
                }),
                productOffering: new FormGroup({
                    href: new FormControl(),
                    id: new FormControl(),
                    name: new FormControl()
                }),
                termOrCondition: new FormGroup({
                    description: new FormControl(),
                    id: new FormControl(),
                    validFor: new FormControl()
                })
            })
        ]),
        agreementPeriod: new FormControl(),
        agreementSpecification: new FormGroup({
            href: new FormControl(),
            id: new FormControl(),
            name: new FormControl(),
            description: new FormControl()
        }),
        agreementType: new FormControl(),
        associatedAgreement: new FormArray([
            new FormGroup({
                href: new FormControl(),
                id: new FormControl(),
                name: new FormControl()
            })
        ]),
        characteristic: new FormArray([
            new FormGroup({
                name: new FormControl(),
                value: new FormControl(),
                valueType: new FormControl()
            })
        ]),
        completionDate: new FormControl(),
        description: new FormControl(),
        documentNumber: new FormControl(),
        engagedParty: new FormArray([
            new FormGroup({
                href: new FormControl(),
                id: new FormControl(),
                name: new FormControl(),
                role: new FormControl()
            })
        ]),
        href: new FormControl(),
        initialDate: new FormControl(),
        name: new FormControl(''),
        statementOfIntent: new FormControl(),
        status: new FormControl(),
        version: new FormControl()
    });
}
