import { useLocation, useNavigate } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
// eslint-disable-next-line import/no-extraneous-dependencies
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Form, Input } from 'antd'
import { useCallback, useState } from 'react'

import type { Record } from '~/types/record'

import { recordSchema } from '~/types/record'
import { useMounted } from '~/utils/useMounted'
import { updateRecord } from '~/api/updateRecord'
import { Layout } from '~/components/Layout'

import styles from './DebetEdit.module.scss'

export function DebetEdit() {
    const mountedRef = useMounted()
    const navigate = useNavigate()
    const { state } = useLocation()
    const { handleSubmit, control, formState: { errors }, trigger } = useForm({
        defaultValues: state as Record,
        resolver: zodResolver(recordSchema),
    })
    const [formSubmitting, setFormSubmitting] = useState<boolean>(false)

    const onFormSubmit = useCallback((values: Record) => {
        setFormSubmitting(true)

        updateRecord(values).then(() => {
            navigate('/debet')
        })
    }, [mountedRef, navigate])

    return (
        <Layout title="Редактирование дохода">
            <div className={styles['form']}>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onSubmitCapture={handleSubmit(onFormSubmit)}
                    autoComplete="off"
                >
                    <Form.Item>
                        <Form.Item label="Комментарий" validateStatus={errors.count ? 'error' : 'success'} help={errors.count?.message}>
                            <Controller
                                name="count"
                                render={({ field: { value, onChange, name } }) => {
                                    const onFieldBlur = () => trigger(name)

                                    return (
                                        <Input
                                            type="number"
                                            onChange={((ev) => {
                                                return onChange(+ev.target.value)
                                            })}
                                            onBlur={onFieldBlur}
                                            defaultValue={value}
                                        />
                                    )
                                }}
                                control={control}
                            />
                        </Form.Item>

                        <Form.Item label="Комментарий" validateStatus={errors.comment ? 'error' : 'success'} help={errors.comment?.message}>
                            <Controller
                                name="comment"
                                render={({ field: { value, onChange, name } }) => {
                                    const onFieldBlur = () => trigger(name)

                                    return (
                                        <Input
                                            onChange={onChange}
                                            onBlur={onFieldBlur}
                                            defaultValue={value}
                                        />
                                    )
                                }}
                                control={control}
                            />
                        </Form.Item>

                        <Button type="primary" htmlType="submit" loading={formSubmitting}>
                            Сохранить
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Layout>
    )

    // return (
    //     <div className={styles['form']}>
    //         <h1 className={styles['header']}>Редактирование</h1>
    //
    //         <Form
    //             name="basic"
    //             labelCol={{ span: 8 }}
    //             wrapperCol={{ span: 16 }}
    //             initialValues={{ remember: true }}
    //             onSubmitCapture={handleSubmit(onFormSubmit)}
    //             autoComplete="off"
    //         >
    //             <Form.Item label="Имя" validateStatus={errors.firstName ? 'error' : 'success'} help={errors.firstName?.message}>
    //                 <Controller
    //                     name="firstName"
    //                     render={({ field: { value, onChange, name } }) => {
    //                         const onFieldBlur = () => trigger(name)
    //
    //                         return (
    //                             <Input
    //                                 onChange={onChange}
    //                                 onBlur={onFieldBlur}
    //                                 defaultValue={value}
    //                             />
    //                         )
    //                     }}
    //                     control={control}
    //                 />
    //             </Form.Item>
    //
    //             <Form.Item label="Фамилия" validateStatus={errors.lastName ? 'error' : 'success'} help={errors.lastName?.message}>
    //                 <Controller
    //                     name="lastName"
    //                     render={({ field: { value, onChange, name } }) => {
    //                         const onFieldBlur = () => trigger(name)
    //
    //                         return (
    //                             <Input
    //                                 onChange={onChange}
    //                                 onBlur={onFieldBlur}
    //                                 defaultValue={value}
    //                             />
    //                         )
    //                     }}
    //                     control={control}
    //                 />
    //             </Form.Item>
    //
    //             <Form.Item label="Адрес" validateStatus={errors.address ? 'error' : 'success'} help={errors.address?.message}>
    //                 <Controller
    //                     name="address"
    //                     render={({ field: { name, value, onChange } }) => {
    //                         const onFieldBlur = () => trigger(name)
    //
    //                         return (
    //                             <Input
    //                                 onChange={onChange}
    //                                 onBlur={onFieldBlur}
    //                                 defaultValue={value}
    //                             />
    //                         )
    //                     }}
    //                     control={control}
    //                 />
    //             </Form.Item>
    //
    //             <Form.Item label="Возраст" validateStatus={errors.age ? 'error' : 'success'} help={errors.age?.message}>
    //                 <Controller
    //                     name="age"
    //                     render={({ field: { value, name } }) => {
    //                         const onAgeChange = (selectedValue: number) => setValue(name, selectedValue)
    //                         const onFieldBlur = () => trigger(name)
    //
    //                         return (
    //                             <Select
    //                                 defaultValue={value}
    //                                 onChange={onAgeChange}
    //                                 onBlur={onFieldBlur}
    //                                 options={[
    //                                     { value: 30, label: '30' },
    //                                     { value: 31, label: '31' },
    //                                     { value: 32, label: '32' },
    //                                     { value: 33, label: '33' },
    //                                 ]}
    //                             />
    //                         )
    //                     }}
    //                     control={control}
    //                 />
    //             </Form.Item>
    //
    //             <Form.Item label="Активен" validateStatus={errors.active ? 'error' : 'success'} help={errors.active?.message}>
    //                 <Controller
    //                     name="active"
    //                     render={({ field: { value, name } }) => {
    //                         const onCheckChange = () => setValue(name, !value)
    //
    //                         return (
    //                             <Checkbox
    //                                 onChange={onCheckChange}
    //                                 checked={value}
    //                             />
    //                         )
    //                     }}
    //                     control={control}
    //                 />
    //             </Form.Item>
    //
    //             <Form.Item label="Форма доступа" validateStatus={errors.access ? 'error' : 'success'} help={errors.access?.message}>
    //                 <Controller
    //                     name="access"
    //                     render={({ field: { onChange, value } }) => {
    //                         return (
    //                             <Radio.Group defaultValue={value}>
    //                                 <Radio value="full" onChange={onChange}>Полный</Radio>
    //                                 <Radio value="partial" onChange={onChange}>Частичный</Radio>
    //                             </Radio.Group>
    //                         )
    //                     }}
    //                     control={control}
    //                 />
    //             </Form.Item>
    //
    //             <Form.Item>
    //                 <Button type="primary" htmlType="submit" loading={formSubmitting}>
    //                     Submit
    //                 </Button>
    //             </Form.Item>
    //         </Form>
    //     </div>
    // )
}
